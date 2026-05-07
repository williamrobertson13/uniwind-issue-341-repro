import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy398 } from '../generated/copy/copy398';
import { layout398 } from '../generated/layouts/layout398';
import { palette398 } from '../generated/palettes/palette398';

const RuntimeView398 = withUniwind(View);

export function Screen398() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView398 styleClassName={layout398.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy398.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy398.detail} / {palette398.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
