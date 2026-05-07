import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy712 } from '../generated/copy/copy712';
import { layout712 } from '../generated/layouts/layout712';
import { palette712 } from '../generated/palettes/palette712';

const RuntimeView712 = withUniwind(View);

export function Screen712() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView712 styleClassName={layout712.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy712.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy712.detail} / {palette712.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
