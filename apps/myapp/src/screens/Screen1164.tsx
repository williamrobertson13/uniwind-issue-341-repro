import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1164 } from '../generated/copy/copy1164';
import { layout1164 } from '../generated/layouts/layout1164';
import { palette1164 } from '../generated/palettes/palette1164';

const RuntimeView1164 = withUniwind(View);

export function Screen1164() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1164 styleClassName={layout1164.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1164.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1164.detail} / {palette1164.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
