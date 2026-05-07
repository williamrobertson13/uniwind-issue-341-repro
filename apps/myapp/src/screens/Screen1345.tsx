import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1345 } from '../generated/copy/copy1345';
import { layout1345 } from '../generated/layouts/layout1345';
import { palette1345 } from '../generated/palettes/palette1345';

const RuntimeView1345 = withUniwind(View);

export function Screen1345() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1345 styleClassName={layout1345.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1345.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1345.detail} / {palette1345.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
