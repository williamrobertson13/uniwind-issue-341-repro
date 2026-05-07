import { memo } from 'react';
import { Pressable as RNPressable, Text as RNText, View as RNView } from 'react-native';
import { useCSSVariable, useResolveClassNames, useUniwind, withUniwind } from 'uniwind';
import {
	Pressable,
	ScrollView,
	Switch,
	Text,
	TextInput,
	View,
} from 'uniwind/components';

const RuntimeView = withUniwind(RNView);
const RuntimeText = withUniwind(RNText);
const RuntimePressable = withUniwind(RNPressable);

const runtimeClasses = [
	'rounded-xl border border-blue-200 bg-blue-50 p-4',
	'rounded-lg border border-emerald-200 bg-emerald-50 p-3',
	'rounded-md border border-amber-200 bg-amber-50 p-2',
	'rounded-2xl border border-rose-200 bg-rose-50 p-5',
];

export const UniwindRuntimeStress = memo(function UniwindRuntimeStress() {
	const { theme } = useUniwind();
	const [content, background, space] = useCSSVariable([
		'--color-content-primary',
		'--color-background-primary',
		'--space-4',
	]);
	const resolvedPanel = useResolveClassNames('rounded-2xl border border-indigo-200 bg-indigo-50 p-4');
	const resolvedText = useResolveClassNames('text-sm font-semibold text-indigo-900');

	return (
		<View className="gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
			<Text className="text-lg font-bold text-slate-900">Generic runtime stress: {theme}</Text>
			<RuntimeView styleClassName="rounded-xl bg-white p-4 shadow-md" style={resolvedPanel}>
				<RuntimeText styleClassName="text-sm font-semibold text-indigo-900" style={resolvedText}>
					{String(content ?? 'content')} / {String(background ?? 'background')} /{' '}
					{String(space ?? 'space')}
				</RuntimeText>
			</RuntimeView>
			<RuntimePressable styleClassName="rounded-lg bg-indigo-600 px-4 py-2 active:bg-indigo-700">
				<RNText>wrapped pressable</RNText>
			</RuntimePressable>
			<ScrollView className="max-h-48 gap-2 rounded-xl bg-white p-3">
				{runtimeClasses.map((className) => (
					<View key={className} className={className} data-repro-layer="runtime">
						<Text className="text-sm text-slate-700">{className}</Text>
					</View>
				))}
			</ScrollView>
			<Pressable className="rounded-lg bg-cyan-600 px-4 py-2 active:bg-cyan-700">
				<Text className="text-white">component export pressable</Text>
			</Pressable>
			<TextInput
				className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
				defaultValue="component export input"
			/>
			<Switch className="self-start" value />
		</View>
	);
});
