import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy254 } from '../generated/copy/copy254';
import { layout254 } from '../generated/layouts/layout254';
import { palette254 } from '../generated/palettes/palette254';

const RuntimeView254 = withUniwind(View);

export function Screen254() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView254 styleClassName={layout254.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy254.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy254.detail} / {palette254.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
