import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1172 } from '../generated/copy/copy1172';
import { layout1172 } from '../generated/layouts/layout1172';
import { palette1172 } from '../generated/palettes/palette1172';

const RuntimeView1172 = withUniwind(View);

export function Screen1172() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1172 styleClassName={layout1172.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1172.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1172.detail} / {palette1172.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
