import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy592 } from '../generated/copy/copy592';
import { layout592 } from '../generated/layouts/layout592';
import { palette592 } from '../generated/palettes/palette592';

const RuntimeView592 = withUniwind(View);

export function Screen592() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView592 styleClassName={layout592.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy592.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy592.detail} / {palette592.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
