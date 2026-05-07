import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy137 } from '../generated/copy/copy137';
import { layout137 } from '../generated/layouts/layout137';
import { palette137 } from '../generated/palettes/palette137';

const RuntimeView137 = withUniwind(View);

export function Screen137() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView137 styleClassName={layout137.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy137.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy137.detail} / {palette137.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
