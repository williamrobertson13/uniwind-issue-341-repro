import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1182 } from '../generated/copy/copy1182';
import { layout1182 } from '../generated/layouts/layout1182';
import { palette1182 } from '../generated/palettes/palette1182';

const RuntimeView1182 = withUniwind(View);

export function Screen1182() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1182 styleClassName={layout1182.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1182.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1182.detail} / {palette1182.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
