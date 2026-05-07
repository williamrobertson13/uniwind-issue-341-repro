import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1148 } from '../generated/copy/copy1148';
import { layout1148 } from '../generated/layouts/layout1148';
import { palette1148 } from '../generated/palettes/palette1148';

const RuntimeView1148 = withUniwind(View);

export function Screen1148() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1148 styleClassName={layout1148.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1148.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1148.detail} / {palette1148.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
