import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy757 } from '../generated/copy/copy757';
import { layout757 } from '../generated/layouts/layout757';
import { palette757 } from '../generated/palettes/palette757';

const RuntimeView757 = withUniwind(View);

export function Screen757() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView757 styleClassName={layout757.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy757.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy757.detail} / {palette757.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
