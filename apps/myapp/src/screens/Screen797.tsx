import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy797 } from '../generated/copy/copy797';
import { layout797 } from '../generated/layouts/layout797';
import { palette797 } from '../generated/palettes/palette797';

const RuntimeView797 = withUniwind(View);

export function Screen797() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView797 styleClassName={layout797.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy797.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy797.detail} / {palette797.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
