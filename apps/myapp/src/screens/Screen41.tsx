import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy41 } from '../generated/copy/copy41';
import { layout41 } from '../generated/layouts/layout41';
import { palette41 } from '../generated/palettes/palette41';

const RuntimeView41 = withUniwind(View);

export function Screen41() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView41 styleClassName={layout41.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy41.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy41.detail} / {palette41.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
