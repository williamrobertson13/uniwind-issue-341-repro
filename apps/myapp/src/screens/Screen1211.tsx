import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1211 } from '../generated/copy/copy1211';
import { layout1211 } from '../generated/layouts/layout1211';
import { palette1211 } from '../generated/palettes/palette1211';

const RuntimeView1211 = withUniwind(View);

export function Screen1211() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1211 styleClassName={layout1211.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1211.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1211.detail} / {palette1211.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
