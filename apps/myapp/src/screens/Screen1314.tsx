import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1314 } from '../generated/copy/copy1314';
import { layout1314 } from '../generated/layouts/layout1314';
import { palette1314 } from '../generated/palettes/palette1314';

const RuntimeView1314 = withUniwind(View);

export function Screen1314() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1314 styleClassName={layout1314.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1314.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1314.detail} / {palette1314.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
