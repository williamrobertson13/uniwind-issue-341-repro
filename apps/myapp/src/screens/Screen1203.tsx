import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1203 } from '../generated/copy/copy1203';
import { layout1203 } from '../generated/layouts/layout1203';
import { palette1203 } from '../generated/palettes/palette1203';

const RuntimeView1203 = withUniwind(View);

export function Screen1203() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1203 styleClassName={layout1203.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1203.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1203.detail} / {palette1203.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
