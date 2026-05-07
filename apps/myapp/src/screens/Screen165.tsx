import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy165 } from '../generated/copy/copy165';
import { layout165 } from '../generated/layouts/layout165';
import { palette165 } from '../generated/palettes/palette165';

const RuntimeView165 = withUniwind(View);

export function Screen165() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView165 styleClassName={layout165.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy165.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy165.detail} / {palette165.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
