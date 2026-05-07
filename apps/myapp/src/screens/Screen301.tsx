import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy301 } from '../generated/copy/copy301';
import { layout301 } from '../generated/layouts/layout301';
import { palette301 } from '../generated/palettes/palette301';

const RuntimeView301 = withUniwind(View);

export function Screen301() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView301 styleClassName={layout301.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy301.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy301.detail} / {palette301.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
