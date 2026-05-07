import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy877 } from '../generated/copy/copy877';
import { layout877 } from '../generated/layouts/layout877';
import { palette877 } from '../generated/palettes/palette877';

const RuntimeView877 = withUniwind(View);

export function Screen877() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView877 styleClassName={layout877.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy877.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy877.detail} / {palette877.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
