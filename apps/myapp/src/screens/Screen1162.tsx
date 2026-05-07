import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1162 } from '../generated/copy/copy1162';
import { layout1162 } from '../generated/layouts/layout1162';
import { palette1162 } from '../generated/palettes/palette1162';

const RuntimeView1162 = withUniwind(View);

export function Screen1162() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1162 styleClassName={layout1162.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1162.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1162.detail} / {palette1162.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
