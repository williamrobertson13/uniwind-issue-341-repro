import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1220 } from '../generated/copy/copy1220';
import { layout1220 } from '../generated/layouts/layout1220';
import { palette1220 } from '../generated/palettes/palette1220';

const RuntimeView1220 = withUniwind(View);

export function Screen1220() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1220 styleClassName={layout1220.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1220.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1220.detail} / {palette1220.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
