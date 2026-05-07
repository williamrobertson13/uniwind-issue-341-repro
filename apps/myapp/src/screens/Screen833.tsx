import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy833 } from '../generated/copy/copy833';
import { layout833 } from '../generated/layouts/layout833';
import { palette833 } from '../generated/palettes/palette833';

const RuntimeView833 = withUniwind(View);

export function Screen833() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView833 styleClassName={layout833.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy833.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy833.detail} / {palette833.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
