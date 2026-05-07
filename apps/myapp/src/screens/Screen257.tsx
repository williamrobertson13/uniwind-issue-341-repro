import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy257 } from '../generated/copy/copy257';
import { layout257 } from '../generated/layouts/layout257';
import { palette257 } from '../generated/palettes/palette257';

const RuntimeView257 = withUniwind(View);

export function Screen257() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView257 styleClassName={layout257.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy257.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy257.detail} / {palette257.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
