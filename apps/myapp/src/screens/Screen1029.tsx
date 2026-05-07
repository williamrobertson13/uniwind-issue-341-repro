import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1029 } from '../generated/copy/copy1029';
import { layout1029 } from '../generated/layouts/layout1029';
import { palette1029 } from '../generated/palettes/palette1029';

const RuntimeView1029 = withUniwind(View);

export function Screen1029() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1029 styleClassName={layout1029.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1029.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1029.detail} / {palette1029.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
