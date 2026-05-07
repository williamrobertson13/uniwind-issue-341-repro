import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1272 } from '../generated/copy/copy1272';
import { layout1272 } from '../generated/layouts/layout1272';
import { palette1272 } from '../generated/palettes/palette1272';

const RuntimeView1272 = withUniwind(View);

export function Screen1272() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1272 styleClassName={layout1272.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1272.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1272.detail} / {palette1272.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
