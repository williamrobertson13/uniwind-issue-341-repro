import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1092 } from '../generated/copy/copy1092';
import { layout1092 } from '../generated/layouts/layout1092';
import { palette1092 } from '../generated/palettes/palette1092';

const RuntimeView1092 = withUniwind(View);

export function Screen1092() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1092 styleClassName={layout1092.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1092.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1092.detail} / {palette1092.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
