import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1233 } from '../generated/copy/copy1233';
import { layout1233 } from '../generated/layouts/layout1233';
import { palette1233 } from '../generated/palettes/palette1233';

const RuntimeView1233 = withUniwind(View);

export function Screen1233() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1233 styleClassName={layout1233.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1233.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1233.detail} / {palette1233.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
