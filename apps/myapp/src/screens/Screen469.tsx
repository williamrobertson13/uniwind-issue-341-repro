import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy469 } from '../generated/copy/copy469';
import { layout469 } from '../generated/layouts/layout469';
import { palette469 } from '../generated/palettes/palette469';

const RuntimeView469 = withUniwind(View);

export function Screen469() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView469 styleClassName={layout469.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy469.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy469.detail} / {palette469.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
