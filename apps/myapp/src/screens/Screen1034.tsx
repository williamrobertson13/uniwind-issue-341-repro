import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1034 } from '../generated/copy/copy1034';
import { layout1034 } from '../generated/layouts/layout1034';
import { palette1034 } from '../generated/palettes/palette1034';

const RuntimeView1034 = withUniwind(View);

export function Screen1034() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1034 styleClassName={layout1034.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1034.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1034.detail} / {palette1034.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
