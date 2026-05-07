import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1059 } from '../generated/copy/copy1059';
import { layout1059 } from '../generated/layouts/layout1059';
import { palette1059 } from '../generated/palettes/palette1059';

const RuntimeView1059 = withUniwind(View);

export function Screen1059() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1059 styleClassName={layout1059.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1059.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1059.detail} / {palette1059.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
