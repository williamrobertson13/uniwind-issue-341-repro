import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy781 } from '../generated/copy/copy781';
import { layout781 } from '../generated/layouts/layout781';
import { palette781 } from '../generated/palettes/palette781';

const RuntimeView781 = withUniwind(View);

export function Screen781() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView781 styleClassName={layout781.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy781.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy781.detail} / {palette781.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
